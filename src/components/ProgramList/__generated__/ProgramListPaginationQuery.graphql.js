/**
 * @flow
 * @relayHash 6f3232f12fa6d40efa1517682b13ed5e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ProgramList_query$ref = any;
export type ProgramFilterInput = {|
  search?: ?string,
  ownerId?: ?string,
  isPublic?: ?boolean,
  tagId?: ?string,
  clientProfileId?: ?string,
|};
export type ProgramListPaginationQueryVariables = {|
  filter?: ?ProgramFilterInput,
  count: number,
  cursor?: ?string,
|};
export type ProgramListPaginationQueryResponse = {|
  +$fragmentRefs: ProgramList_query$ref
|};
export type ProgramListPaginationQuery = {|
  variables: ProgramListPaginationQueryVariables,
  response: ProgramListPaginationQueryResponse,
|};
*/


/*
query ProgramListPaginationQuery(
  $filter: ProgramFilterInput
  $count: Int!
  $cursor: ID
) {
  ...ProgramList_query_3KQYpM
}

fragment NodeListItem_node on Node {
  ...NodeListItem_presentable
  ... on Owned {
    owner {
      __typename
      ...PresentableAvatar_presentable
      ...PresentableLink_presentable
      ... on Presentable {
        name
      }
      id
    }
  }
  createdAt
}

fragment NodeListItem_presentable on Presentable {
  presentableTypeName: __typename
  ...PresentableAvatar_presentable
  ...PresentableCardMedia_presentable
  name
  image {
    url
    id
  }
  description
}

fragment PresentableAvatar_presentable on Presentable {
  name
  image {
    url
    id
  }
}

fragment PresentableCardMedia_presentable on Presentable {
  ...PresentableAvatar_presentable
  name
  image {
    url
    id
  }
}

fragment PresentableLink_presentable on Presentable {
  __typename
  id
  name
}

fragment ProgramListRow_program on Program {
  ...NodeListItem_node
  id
}

fragment ProgramList_query_3KQYpM on Query {
  programs(filter: $filter, first: $count, after: $cursor) {
    edges {
      node {
        ...ProgramListRow_program
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "ProgramFilterInput",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "filter",
  "variableName": "filter"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    },
    (v4/*: any*/)
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProgramListPaginationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ProgramList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProgramListPaginationQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "programs",
        "storageKey": null,
        "args": (v2/*: any*/),
        "concreteType": "ProgramConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ProgramEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Program",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": "presentableTypeName",
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "description",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "createdAt",
                    "args": null,
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  (v6/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "programs",
        "args": (v2/*: any*/),
        "handle": "connection",
        "key": "ProgramList_programs",
        "filters": [
          "filter"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProgramListPaginationQuery",
    "id": null,
    "text": "query ProgramListPaginationQuery(\n  $filter: ProgramFilterInput\n  $count: Int!\n  $cursor: ID\n) {\n  ...ProgramList_query_3KQYpM\n}\n\nfragment NodeListItem_node on Node {\n  ...NodeListItem_presentable\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableAvatar_presentable\n      ...PresentableLink_presentable\n      ... on Presentable {\n        name\n      }\n      id\n    }\n  }\n  createdAt\n}\n\nfragment NodeListItem_presentable on Presentable {\n  presentableTypeName: __typename\n  ...PresentableAvatar_presentable\n  ...PresentableCardMedia_presentable\n  name\n  image {\n    url\n    id\n  }\n  description\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableCardMedia_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment ProgramListRow_program on Program {\n  ...NodeListItem_node\n  id\n}\n\nfragment ProgramList_query_3KQYpM on Query {\n  programs(filter: $filter, first: $count, after: $cursor) {\n    edges {\n      node {\n        ...ProgramListRow_program\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9965c09affa317139faf0db5f3ed4469';
module.exports = node;
