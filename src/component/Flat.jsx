import React from 'react'

const Flat = () => {

  function flattenNestedArray(data) {
    const flattened = [];

    function flatten(node) {
        flattened.push(node);

        if (node.children) {
            for (const child of node.children) {
                flatten(child);
            }
        }
    }

    for (const item of data) {
        flatten(item);
    }

    return flattened;
}

// Sample data
const sampleData = [
     {
  "id": "1R",
             "name" : "Retail", 
             "parentId": null, 
             "children": [
            {
           "id": "1R-1",
           "name" : "Supermarket", 
           "parentId": "1R"
           },

         {
             "id": "1R-2",
             "name" : "Wholesale Market",
              "parentId": "1R"
            },
        {
        "id": "1R-3",
         "name" : "Flea market",
          "parentId": "1R"
                 },
          {
           "id": "1R-4",
           "name" : "Malls",
           "parentId": "1R"
  }
  ]
  },

  {
  "id": "2H",
   
  "name" : "Healthcare",
   "parentId": null,
    "children": [
  {
  "id": "2H-1",
  "name" : "Clinic",
  "parentId": "2H",
   "children": [
  {
  "id": "2H-1C-1",
  "name" : "Dental",
  "parentId": "2H-1",
  },
  {
  "id": "2H-1C-2",
  "name" : "Ortho",
  "parentId": "2H-1",
  }
  
  ]
  },
  {
  "id": "2H-2",
  "name" : "Hospital",
  "parentId": "2H",
  "children": []
  },
  {
  "id": "2H-3",
   "name" : "Diagnostic Center",
   "parentId": "2H",
  "children": [
  {
  "id": "2H-3D-1",
  "name" : "Imaging Lab",
   "parentId": "2H-1",
  },
  {
  "id": "2H-3D-2",
  "name" : "Pathology Lab",
   "parentId": "2H-1",
  }
  ]
  }
   
  ]
  }
  ];
  

const flattenedData = flattenNestedArray(sampleData);
console.log("flatten",flattenedData);


  return (
    <div>Flat</div>
  )
}

export default Flat