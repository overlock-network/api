package v1beta1

import (
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	// this line is used by starport scaffolding # 1
)

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteConfiguration{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateEnvironment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateEnvironment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteEnvironment{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateProvider{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateProvider{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteProvider{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
