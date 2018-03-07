tests:

```
pm.test("got features", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.routes.features.length).to.be.above(0);
});
```
