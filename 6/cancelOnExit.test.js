  test("Callbacks are called", () => {
    const cancelCb = jest.fn();
    settings.callback_cancel = cancelCb;
    setSources(img, settings, instance);
    cancelLoading(img, entry, settings, instance);
    expect(cancelCb).toHaveBeenCalledTimes(1);
    expect(cancelCb).toHaveBeenCalledWith(img, entry, instance);
  });