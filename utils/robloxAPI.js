const axios = require('axios');

// Replace with your actual game and group IDs
const gameIDs = [
  '15862468045', // Work at a Hospital RP
  '14684875878',
  '108277447736825',
  '6321891709',
  '17428520796',
  '14973253793',
  '16347356597',
  '7282854346',
  '15163154086'
];

const groupIDs = [
  '8927586',
  '4595505',
  '33205238',
  '33504510',
  '34817411',
  '32386245',
  '17351356',
  '32815300',
  '11919869',
  '33862880'
];

async function getGameStats() {
  const stats = await Promise.all(gameIDs.map(async (id) => {
    const res = await axios.get(`https://games.roblox.com/v1/games?universeIds=${id}`);
    const data = res.data.data[0];
    return {
      id,
      playing: data.playing,
      visits: data.visits
    };
  }));
  return stats;
}

async function getGroupStats() {
  const stats = await Promise.all(groupIDs.map(async (id) => {
    const res = await axios.get(`https://groups.roblox.com/v1/groups/${id}`);
    return {
      id,
      name: res.data.name,
      memberCount: res.data.memberCount
    };
  }));
  return stats;
}

module.exports = {
  getGameStats,
  getGroupStats
};
