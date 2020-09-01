const permissionReducer = (state = {
    userID:0,

    userStatus:2,
    displayStatus:2,

    personalName:"-",
    demandDateOfPermission:null,

    beginDateOfPermission:new Date("2020-01-01T00:00"),
    endDateOfPermission: new Date("2020-01-01T00:00"),

    foldCode:25,
    areaCode:50,

    permissionDescription:"",

    selectVehicleUsageName:"Araç kullanım durumu",
    selectVehicleUsageID:"",

    priceOfTrainOrBus:null,
    totalDistanceOfIndividualCar:null,

    setThePermissionType:2,

    chiefConfirmStatus:-1,
    chiefsDescription:"",

    generalManagerConfirmStatus:-1,
    generalManagerDescription:"",

}, action) => {
    switch (action.type) {
        case "SET_PERMISSION":
            state = {
                ...state,
                userID:action.payload.userID,
                personalName:action.payload.personalName,

                userStatus:action.payload.userStatus,
                displayStatus:action.payload.displayStatus,

                demandDateOfPermission:action.payload.demandDateOfPermission,

                beginDateOfPermission:action.payload.beginDateOfPermission,
                endDateOfPermission:action.payload.endDateOfPermission,

                foldCode:action.payload.foldCode,
                areaCode:action.payload.areaCode,

                selectVehicleUsageName:action.payload.selectVehicleUsageName,
                selectVehicleUsageID:action.payload.selectVehicleUsageID,

                permissionDescription:action.payload.permissionDescription,

                priceOfTrainOrBus:action.payload.priceOfTrainOrBus,
                totalDistanceOfIndividualCar:action.payload.totalDistanceOfIndividualCar,

                displayThePermissionName:action.payload.displayThePermissionName,
                setPermissionType:action.payload.setPermissionType
            }
            break;
        case "CHIEFS_CONFIRM":
            state={
                ...state,
                chiefConfirmStatus:action.payload.chiefConfirmStatus,
                chiefsDescription:action.payload.chiefsDescription
            }
            break;
        case "GENERAL_MANAGER_CONFIRM":
            state={
                ...state,
                generalManagerConfirmStatus:action.payload.generalManagerConfirmStatus,
                generalManagerDescription:action.payload.generalManagerDescription
            }
            break;
        default:
            break;
    }
    return state;
}
export default permissionReducer;
