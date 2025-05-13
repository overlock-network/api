//@ts-nocheck
import * as _7 from "./crossplane/v1beta1/configuration";
import * as _8 from "./crossplane/v1beta1/environment";
import * as _9 from "./crossplane/v1beta1/genesis";
import * as _10 from "./crossplane/v1beta1/metadata";
import * as _11 from "./crossplane/v1beta1/params";
import * as _12 from "./crossplane/v1beta1/provider";
import * as _13 from "./crossplane/v1beta1/query";
import * as _14 from "./crossplane/v1beta1/tx";
import * as _15 from "./storage/v1beta1/genesis";
import * as _16 from "./storage/v1beta1/oci_registry";
import * as _17 from "./storage/v1beta1/params";
import * as _18 from "./storage/v1beta1/query";
import * as _19 from "./storage/v1beta1/registry";
import * as _20 from "./storage/v1beta1/tx";
import * as _21 from "./crossplane/v1beta1/tx.amino";
import * as _22 from "./storage/v1beta1/tx.amino";
import * as _23 from "./crossplane/v1beta1/tx.registry";
import * as _24 from "./storage/v1beta1/tx.registry";
import * as _25 from "./crossplane/v1beta1/query.lcd";
import * as _26 from "./storage/v1beta1/query.lcd";
import * as _27 from "./crossplane/v1beta1/query.rpc.Query";
import * as _28 from "./storage/v1beta1/query.rpc.Query";
import * as _29 from "./crossplane/v1beta1/tx.rpc.msg";
import * as _30 from "./storage/v1beta1/tx.rpc.msg";
import * as _31 from "./lcd";
import * as _32 from "./rpc.query";
import * as _33 from "./rpc.tx";
export namespace overlock {
  export namespace crossplane {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._14,
      ..._21,
      ..._23,
      ..._25,
      ..._27,
      ..._29
    };
  }
  export namespace storage {
    export const v1beta1 = {
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._22,
      ..._24,
      ..._26,
      ..._28,
      ..._30
    };
  }
  export const ClientFactory = {
    ..._31,
    ..._32,
    ..._33
  };
}