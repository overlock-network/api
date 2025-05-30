package v1beta1

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRegistry{}

func NewMsgCreateRegistry(creator string, name string, provider string) *MsgCreateRegistry {
	return &MsgCreateRegistry{
		Creator:  creator,
		Name:     name,
		Provider: provider,
	}
}

func (msg *MsgCreateRegistry) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
