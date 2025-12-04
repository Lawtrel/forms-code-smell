  test('setToLoadCount sets toLoadCount to the given value', () => {
    const mockInstance = {};
    setToLoadCount(mockInstance, 10);
    expect(mockInstance.toLoadCount).toBe(10);
  });