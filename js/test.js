var documents = [{
    "name": "Lunr",
    "text": "Like Solr, but much smaller, and not as bright."
  }, {
    "name": "React",
    "text": "A JavaScript library for building user interfaces. Bright."
  }, {
    "name": "Lodash",
    "text": "A modern JavaScript utility library delivering modularity, performance & extras."
  }]


  var idx = lunr(function () {
    this.ref('name')
    this.field('text')
  
    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

  result = idx.search("bright");
  console.log(result[0].ref, result[1])