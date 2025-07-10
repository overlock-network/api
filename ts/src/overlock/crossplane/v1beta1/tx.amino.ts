//@ts-nocheck
import { MsgCreateEnvironment, MsgUpdateEnvironment, MsgDeleteEnvironment, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./tx";
export const AminoConverter = {
  "/overlock.crossplane.v1beta1.MsgCreateEnvironment": {
    aminoType: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
    toAmino: MsgCreateEnvironment.toAmino,
    fromAmino: MsgCreateEnvironment.fromAmino
  },
  "/overlock.crossplane.v1beta1.MsgUpdateEnvironment": {
    aminoType: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
    toAmino: MsgUpdateEnvironment.toAmino,
    fromAmino: MsgUpdateEnvironment.fromAmino
  },
  "/overlock.crossplane.v1beta1.MsgDeleteEnvironment": {
    aminoType: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
    toAmino: MsgDeleteEnvironment.toAmino,
    fromAmino: MsgDeleteEnvironment.fromAmino
  },
  "/overlock.crossplane.v1beta1.MsgCreateProvider": {
    aminoType: "/overlock.crossplane.v1beta1.MsgCreateProvider",
    toAmino: MsgCreateProvider.toAmino,
    fromAmino: MsgCreateProvider.fromAmino
  },
  "/overlock.crossplane.v1beta1.MsgUpdateProvider": {
    aminoType: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
    toAmino: MsgUpdateProvider.toAmino,
    fromAmino: MsgUpdateProvider.fromAmino
  },
  "/overlock.crossplane.v1beta1.MsgDeleteProvider": {
    aminoType: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
    toAmino: MsgDeleteProvider.toAmino,
    fromAmino: MsgDeleteProvider.fromAmino
  }
};