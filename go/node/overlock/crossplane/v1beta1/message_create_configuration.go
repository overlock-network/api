package v1beta1

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateConfiguration{}

func NewMsgCreateConfiguration(creator string, metadata *Metadata) *MsgCreateConfiguration {
	return &MsgCreateConfiguration{
		Creator:  creator,
		Metadata: metadata,
	}
}

func (msg *MsgCreateConfiguration) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
