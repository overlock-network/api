package v1beta1

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateProvider{}

func NewMsgCreateProvider(creator string, metadata Metadata, ip string, port uint32, countryCode string, environmentType string, availability string) *MsgCreateProvider {
	return &MsgCreateProvider{
		Creator:         creator,
		Metadata:        &metadata,
		Ip:              ip,
		Port:            port,
		CountryCode:     countryCode,
		EnvironmentType: environmentType,
		Availability:    availability,
	}
}

func (msg *MsgCreateProvider) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}