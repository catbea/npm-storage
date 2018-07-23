/**
 * MyLStorage 代表localStorage
 */
const MyLStorage = (function MyLStorage(){
    var ms = "mylstorage";
    var storage=window.localStorage;
    if(!window.localStorage){
        alert("浏览器不支持localstorage");
        return false;
    }

    let set = function(key,value){
        //存储
        var mydata = storage.getItem(ms);
        if(!mydata){
            this.init();
            mydata = storage.getItem(ms);
        }
        mydata = JSON.parse(mydata);
        mydata.data[key] = value;
        storage.setItem(ms,JSON.stringify(mydata));
        return mydata.data;

    };

    let get = function(key){
        //读取
        var mydata = storage.getItem(ms);
        if(!mydata){
            return false;
        }
        mydata = JSON.parse(mydata);

        return mydata.data[key];
    };

    let remove = function(key){
        //读取
        var mydata = storage.getItem(ms);
        if(!mydata){
            return false;
        }

        mydata = JSON.parse(mydata);
        delete mydata.data[key];
        storage.setItem(ms,JSON.stringify(mydata));
        return mydata.data;
    };

    let clear = function(){
        //清除对象
        storage.removeItem(ms);
    };

    let init = function(){
        storage.setItem(ms,'{"data":{}}');
    };

    return {
        set : set,
        get : get,
        remove : remove,
        init : init,
        clear : clear
    };
})();

/**
 * MySStorage 代表sessionStorage
 */
const MySStorage = (function MySStorage(){
    var ms = "mysstorage";
    var storage=window.sessionStorage;
    if(!window.sessionStorage){
        alert("浏览器不支持sessionStorage");
        return false;
    }

    let set = function(key,value){
        //存储
        var mydata = storage.getItem(ms);
        if(!mydata){
            this.init();
            mydata = storage.getItem(ms);
        }
        mydata = JSON.parse(mydata);
        mydata.data[key] = value;
        storage.setItem(ms,JSON.stringify(mydata));
        return mydata.data;

    };

    let get = function(key){
        //读取
        var mydata = storage.getItem(ms);
        if(!mydata){
            return false;
        }
        mydata = JSON.parse(mydata);

        return mydata.data[key];
    };

    let remove = function(key){
        //读取
        var mydata = storage.getItem(ms);
        if(!mydata){
            return false;
        }

        mydata = JSON.parse(mydata);
        delete mydata.data[key];
        storage.setItem(ms,JSON.stringify(mydata));
        return mydata.data;
    };

    let clear = function(){
        //清除对象
        storage.removeItem(ms);
    };

    let init = function(){
        storage.setItem(ms,'{"data":{}}');
    };

    return {
        set : set,
        get : get,
        remove : remove,
        init : init,
        clear : clear
    };
})();

window.MyLStorage = MyLStorage;
window.MySStorage = MySStorage;

