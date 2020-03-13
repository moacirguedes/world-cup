export const addGroup = (groupIndex, teamIndex, team, groups) => {
  console.log(groups[groupIndex].team[teamIndex-1].name)
  groups[groupIndex].team[teamIndex-1].name = team;
  
  
  return groups
}
