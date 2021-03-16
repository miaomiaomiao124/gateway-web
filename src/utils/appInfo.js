const appName="AppName"


function getAppName() {
    return sessionStorage.getItem(appName);
}
function setAppName(AppName) {
    return sessionStorage.setItem(appName,AppName);
}
function removeData() {
    return sessionStorage.removeItem(appName);
}

export default{
    getAppName,
    setAppName,
    removeData,
  }