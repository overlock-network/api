package v1beta1

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgUpdateProvider{}

func NewMsgUpdateProvider(creator string, id uint64, metadata Metadata, ip string, port uint32, countryCode string, environmentType string, availability string) *MsgUpdateProvider {
	return &MsgUpdateProvider{
		Creator:         creator,
		Id:              id,
		Metadata:        &metadata,
		Ip:              ip,
		Port:            port,
		CountryCode:     countryCode,
		EnvironmentType: environmentType,
		Availability:    availability,
	}
}

func (msg *MsgUpdateProvider) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}