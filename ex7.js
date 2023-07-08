function getAddressCity(address) {
    return address.city ?? 'Unknown';
  }
  const address = { street: '123 Main St', country: 'USA' };
  console.log(getAddressCity(address));

  