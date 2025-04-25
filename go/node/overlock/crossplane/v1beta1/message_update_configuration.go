package v1beta1

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUpdateConfiguration{}

func NewMsgUpdateConfiguration(creator string, id uint64, metadata *Metadata) *MsgUpdateConfiguration {
	return &MsgUpdateConfiguration{
		Creator:  creator,
		Id:       id,
		Metadata: metadata,
	}
}

func (msg *MsgUpdateConfiguration) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
