import { parentPort } from 'worker_threads';
import { subDays } from 'date-fns';

export const generateData = () => {
  const newData = {};

  const endingDate = new Date();
  const startingDate = subDays(endingDate, 3);

  let currentTimeStamp = startingDate.getTime();

  while (currentTimeStamp <= endingDate.getTime()) {
    let currentDate = new Date(currentTimeStamp);

    let randomPrice = (1 + Math.random()).toFixed(2);

    const newDataEntry = {
      id: currentDate.toISOString(),
      name: 'Tesla',
      price: randomPrice,
      timestamp: currentDate.toISOString(),
    };

    newData[currentDate.toISOString()] = newDataEntry;
    currentTimeStamp += 1000;
  }

    parentPort.postMessage(newData);
};
