import StorageUtils from "../../tools/StorageUtils.js"

let actions = {

    getNewInfo: function() {

        return function(dispatch, getState) {

            fetch('https://randomuser.me/api/')
                .then(res => {
                    if (res.status !== 200) dispatch(actions.failRequest(res.statusText));

                    res.text().then(data=>{
                        dispatch(actions.doneRequest(JSON.parse(data)));
                    });

                }).catch(e => {
                dispatch(actions.failRequest(e.statusText));
            });
        }
    },

    beginRequest: () => ({
        type: 'beginRequest'
    }),

    doneRequest: personInfo => ({
        type: 'doneRequest',
        payload: personInfo
    }),

    failRequest: errMsg => ({
        type: 'failRequest',
        payload: new Error(errMsg),
        error: true
    }),

    addFavorite: function (person){

        return function(dispatch, getState) {
            //let person = JSON.parse(data);
            let personList = StorageUtils.localGetItem("personList");
            let ifAdd = true;
            if(!personList) {
                personList = [];
            } else {
                for(let i = 0;i < personList.length ; i++){
                    if(personList[i].uuid === person.uuid) {
                        ifAdd = false;
                    }
                }
            }

            if(ifAdd) {
                personList.push(person);
                StorageUtils.localSetItem("personList",personList);
            }
            dispatch(actions.doneFavorite());
        }
        
    },
    doneFavorite: () =>({
        type:'doneFavorite'
    }),
    getFavorites: function() {
        return function(dispatch, getState) {
            let personList = StorageUtils.localGetItem("personList");
            dispatch(actions.getFavoritesDone(personList));
        }
    },
    getFavoritesDone:favorites =>({
        type:'getFavoritesDone',
        favorites: favorites
    }),
    deleteFavorite: function (uuid){
        return function(dispatch, getState) {
            let personList = StorageUtils.localGetItem("personList");
            for(let i = 0; i<personList.length;i++) {
                if(uuid === personList[i].uuid) {
                    personList.splice(i,1);
                }
            }
            StorageUtils.localSetItem("personList",personList);
            dispatch(actions.getFavoritesDone(personList));
        }
    }

};

export default actions;