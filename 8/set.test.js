test('decreaseToLoadCount decreases toLoadCount by 1', () => {
    const mockInstance = { toLoadCount: 5 };
    decreaseToLoadCount(mockInstance);
    expect(mockInstance.toLoadCount).toBe(4);
}