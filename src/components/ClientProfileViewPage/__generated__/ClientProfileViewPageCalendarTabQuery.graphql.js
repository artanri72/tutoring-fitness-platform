/**
 * @flow
 * @relayHash bf8b76bddd014508f8900e8cbe671d6f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PresentableViewPageHeader_presentable$ref = any;
export type ClientProfileViewPageCalendarTabQueryVariables = {|
  clientProfileId?: ?string
|};
export type ClientProfileViewPageCalendarTabQueryResponse = {|
  +clientProfile: ?{|
    +id: string,
    +name: string,
    +$fragmentRefs: PresentableViewPageHeader_presentable$ref,
  |}
|};
export type ClientProfileViewPageCalendarTabQuery = {|
  variables: ClientProfileViewPageCalendarTabQueryVariables,
  response: ClientProfileViewPageCalendarTabQueryResponse,
|};
*/


/*
query ClientProfileViewPageCalendarTabQuery(
  $clientProfileId: ID
) {
  clientProfile(id: $clientProfileId) {
    ...PresentableViewPageHeader_presentable
    id
    name
  }
}

fragment PresentableAvatar_presentable on Presentable {
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

fragment PresentableViewPageHeader_presentable on Presentable {
  ...PresentableAvatar_presentable
  name
  image {
    url
    width
    height
    id
  }
  ... on Owned {
    owner {
      __typename
      ...PresentableLink_presentable
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "clientProfileId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "clientProfileId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientProfileViewPageCalendarTabQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "PresentableViewPageHeader_presentable",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientProfileViewPageCalendarTabQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "clientProfile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ClientProfile",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
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
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "width",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "height",
                "args": null,
                "storageKey": null
              }
            ]
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ClientProfileViewPageCalendarTabQuery",
    "id": null,
    "text": "query ClientProfileViewPageCalendarTabQuery(\n  $clientProfileId: ID\n) {\n  clientProfile(id: $clientProfileId) {\n    ...PresentableViewPageHeader_presentable\n    id\n    name\n  }\n}\n\nfragment PresentableAvatar_presentable on Presentable {\n  name\n  image {\n    url\n    id\n  }\n}\n\nfragment PresentableLink_presentable on Presentable {\n  __typename\n  id\n  name\n}\n\nfragment PresentableViewPageHeader_presentable on Presentable {\n  ...PresentableAvatar_presentable\n  name\n  image {\n    url\n    width\n    height\n    id\n  }\n  ... on Owned {\n    owner {\n      __typename\n      ...PresentableLink_presentable\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1d449e8c16ef3eceb2aa88d64f040e39';
module.exports = node;
