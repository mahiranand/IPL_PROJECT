function highestDismissal(deliveries) {
  let maxWicket = -1;
  let ans = [];

  // eslint-disable-next-line no-unused-vars
  const dummyData = deliveries.reduce((acc, delivery) => {
    if (!delivery.dismissal_kind || delivery.dismissal_kind === "run out") {
      return acc;
    }

    if (!acc[delivery.bowler]) {
      acc[delivery.bowler] = {};
    }

    if (!acc[delivery.bowler][delivery.player_dismissed]) {
      acc[delivery.bowler][delivery.player_dismissed] = 0;
    }

    acc[delivery.bowler][delivery.player_dismissed]++;

    if (maxWicket == acc[delivery.bowler][delivery.player_dismissed]) {
      ans.push({
        bowler: delivery.bowler,
        batsman: delivery.player_dismissed,
        dismissal: acc[delivery.bowler][delivery.player_dismissed],
      });
    }

    if (maxWicket < acc[delivery.bowler][delivery.player_dismissed]) {
      maxWicket = acc[delivery.bowler][delivery.player_dismissed];
      ans = [];
      ans.push({
        bowler: delivery.bowler,
        batsman: delivery.player_dismissed,
        dismissal: acc[delivery.bowler][delivery.player_dismissed],
      });
    }

    return acc;
  }, {});

  return ans;
}
module.exports.highestDismissal = highestDismissal;
