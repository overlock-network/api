package v1beta1

import (
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	// this line is used by starport scaffolding # 1
)

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRegistry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateRegistry{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteRegistry{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
