export const dashboardActionTypes = {
  setActiveTab: "dashboard/activeTab/set",
};

export const updateActiveTab = (payload) => ({
  type: dashboardActionTypes.setActiveTab,
  payload,
});
