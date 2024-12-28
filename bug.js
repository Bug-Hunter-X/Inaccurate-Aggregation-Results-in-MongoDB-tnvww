```javascript
// Incorrect aggregation pipeline causing unexpected results
aggregate([{
    $match: { "field": "value" }
  }, {
    $group: { _id: "$field", count: { $sum: 1 } }
  }, {
    $project: { _id: 0, count: 1 }
  }
])
```