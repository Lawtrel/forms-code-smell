test("Restores original attributes", () => {
    img.setAttribute("src", url1);
    img.setAttribute("data-src", url100);
    img.setAttribute("data-srcset", url200);
    img.setAttribute("data-sizes", sizes100);
    setSources(img, settings, instance);
    cancelLoading(img, entry, settings, instance);
    expect(img).toHaveAttribute("src", url1);
    expect(img).not.toHaveAttribute("srcset");
    expect(img).not.toHaveAttribute("sizes");
  });