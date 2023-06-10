export type Ramp = {
  id: string;
  algorithm: string;
};

function getRampAlgorithms(onUpdate: (ramps: Ramp[]) => void): void {
  const count = 50;
  setInterval(() => {
    const ramps: Ramp[] = [];
    for (let i = 0; i < count; i++) {
      ramps.push({
        id: `ramp-${i}`,
        algorithm: [
          "Algorithm 1",
          "Algorithm 2",
          "Algorithm 3",
          "Algorithm 4",
          "Algorithm 5",
        ][Math.floor(Math.random() * 5)],
      });
    }
    onUpdate(ramps);
  }, 5000);
}

export default getRampAlgorithms;
