const generateID = () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};

const generateBarcode = () => {
  return parseInt(Math.floor(1000000 + Math.random() * 9999999));
};

export const initialData = [
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '08:45',
    address: {
      name: '105 Teryan Street, Yerevan',
      position: { lat: 40.190271, lng: 44.522181 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '11:00',
    address: {
      name: '5 Vazgen Sargsyan Street, 0010 Yerevan',
      position: { lat: 40.177104, lng: 44.510443 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '08:45',
    address: {
      name: '22 Martiros Saryan Street, 0002, Yerevan',
      position: { lat: 40.184946, lng: 44.505550 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '09:00 - 10:00',
    eta: '10:01',
    address: {
      name: '14 Petros Adamyan Street, 0010, Yerevan',
      position: { lat: 40.175556, lng: 44.511833 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '08:30',
    address: {
      name: '18/3 Amiryan Street, 0002, Yerevan',
      position: { lat: 40.181566, lng: 44.507376 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '11:15',
    address: {
      name: '16 Marshal Baghramyan avenue, 0019, Yerevan',
      position: { lat: 40.191366, lng: 44.512013 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 11:00',
    eta: '10:01',
    address: {
      name: '1 American Avenue, 0082, Yerevan',
      position: { lat: 40.165196, lng: 44.481577 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '09:05',
    address: {
      name: '1 Northern Avenue, Suite 24, 0001, Yerevan',
      position: { lat: 40.183594, lng: 44.515198 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '09:00 - 10:00',
    eta: '09:20',
    address: {
      name: '10 Mher Mkrtchyan Street, 0010, Yerevan',
      position: { lat: 40.174891, lng: 44.512194 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 11:00',
    eta: '11:10',
    address: {
      name: '7 Mesrop Mashtots Avenue, 0002, Yerevan',
      position: { lat: 40.180010, lng: 44.505843 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 11:00',
    eta: '10:10',
    address: {
      name: '40 Moskovyan Street, 0002, Yerevan',
      position: { lat: 40.187839, lng: 44.509932 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '08:25',
    address: {
      name: '1, 3 Buzand Street, 0010, Yerevan',
      position: { lat: 40.175536, lng: 44.518859 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '11:00 - 12:00',
    eta: '11:45',
    address: {
      name: 'Dzoragyugh 1st Street, Yerevan',
      position: { lat: 40.179451, lng: 44.500182 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 09:00',
    eta: '09:10',
    address: {
      name: '15, 2 Paronyan Street, 0015, Yerevan',
      position: { lat: 40.179828, lng: 44.499832 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '10:45',
    address: {
      name: '3 Hakob Hakobyan Street, 0001, Yerevan',
      position: { lat: 40.199042, lng: 44.490746 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '10:45',
    address: {
      name: '3 Hakob Hakobyan Street, 0001, Yerevan',
      position: { lat: 40.199042, lng: 44.490746 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '11:45',
    address: {
      name: '16 Halabyan Street, 0038, Yerevan',
      position: { lat: 40.196731, lng: 44.479984 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '08:00 - 10:00',
    eta: '10:15',
    address: {
      name: '3 Tsitsernakaberd Highway, 0082, Yerevan',
      position: { lat: 40.179761, lng: 44.488092 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '09:00 - 10:00',
    eta: '09:30',
    address: {
      name: '40 Marshal Baghramyan Avenue, 0019, Yerevan',
      position: { lat: 40.193073, lng: 44.504448 }
    }
  },
  {
    id: generateID(),
    barcode: generateBarcode(),
    status: false,
    done: false,
    time: '10:00 - 12:00',
    eta: '10:50',
    address: {
      name: '10 Tamanyan Street, 0009, Yerevan',
      position: { lat: 40.191164, lng: 44.515614 }
    }
  }
];
