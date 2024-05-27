export const dashboardActionTypes = {
  setActiveTab: "dashboard/activeTab/set",
};

export const updateActiveTab = (payload) => ({
  type: dashboardActionTypes.setActiveTab,
  payload,
});

// dispatchEvent({
//   type: dashboardActionTypes.setActiveTab,
//   payload:{
//     activeTab: "0"
//   }
// })

// dispatchEvent(updateActiveTab("0"))
