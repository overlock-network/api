//@ts-nocheck
import { MsgCreateRegistry, MsgUpdateRegistry, MsgDeleteRegistry } from "./tx";
export const AminoConverter = {
  "/overlock.storage.v1beta1.MsgCreateRegistry": {
    aminoType: "/overlock.storage.v1beta1.MsgCreateRegistry",
    toAmino: MsgCreateRegistry.toAmino,
    fromAmino: MsgCreateRegistry.fromAmino
  },
  "/overlock.storage.v1beta1.MsgUpdateRegistry": {
    aminoType: "/overlock.storage.v1beta1.MsgUpdateRegistry",
    toAmino: MsgUpdateRegistry.toAmino,
    fromAmino: MsgUpdateRegistry.fromAmino
  },
  "/overlock.storage.v1beta1.MsgDeleteRegistry": {
    aminoType: "/overlock.storage.v1beta1.MsgDeleteRegistry",
    toAmino: MsgDeleteRegistry.toAmino,
    fromAmino: MsgDeleteRegistry.fromAmino
  }
};