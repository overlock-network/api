// Code generated by protoc-gen-go-pulsar. DO NOT EDIT.
package crossplanev1beta1

import (
	fmt "fmt"
	runtime "github.com/cosmos/cosmos-proto/runtime"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoiface "google.golang.org/protobuf/runtime/protoiface"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	io "io"
	reflect "reflect"
	sync "sync"
)

var (
	md_Environment          protoreflect.MessageDescriptor
	fd_Environment_metadata protoreflect.FieldDescriptor
	fd_Environment_id       protoreflect.FieldDescriptor
	fd_Environment_creator  protoreflect.FieldDescriptor
	fd_Environment_provider protoreflect.FieldDescriptor
)

func init() {
	file_overlock_crossplane_v1beta1_environment_proto_init()
	md_Environment = File_overlock_crossplane_v1beta1_environment_proto.Messages().ByName("Environment")
	fd_Environment_metadata = md_Environment.Fields().ByName("metadata")
	fd_Environment_id = md_Environment.Fields().ByName("id")
	fd_Environment_creator = md_Environment.Fields().ByName("creator")
	fd_Environment_provider = md_Environment.Fields().ByName("provider")
}

var _ protoreflect.Message = (*fastReflection_Environment)(nil)

type fastReflection_Environment Environment

func (x *Environment) ProtoReflect() protoreflect.Message {
	return (*fastReflection_Environment)(x)
}

func (x *Environment) slowProtoReflect() protoreflect.Message {
	mi := &file_overlock_crossplane_v1beta1_environment_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

var _fastReflection_Environment_messageType fastReflection_Environment_messageType
var _ protoreflect.MessageType = fastReflection_Environment_messageType{}

type fastReflection_Environment_messageType struct{}

func (x fastReflection_Environment_messageType) Zero() protoreflect.Message {
	return (*fastReflection_Environment)(nil)
}
func (x fastReflection_Environment_messageType) New() protoreflect.Message {
	return new(fastReflection_Environment)
}
func (x fastReflection_Environment_messageType) Descriptor() protoreflect.MessageDescriptor {
	return md_Environment
}

// Descriptor returns message descriptor, which contains only the protobuf
// type information for the message.
func (x *fastReflection_Environment) Descriptor() protoreflect.MessageDescriptor {
	return md_Environment
}

// Type returns the message type, which encapsulates both Go and protobuf
// type information. If the Go type information is not needed,
// it is recommended that the message descriptor be used instead.
func (x *fastReflection_Environment) Type() protoreflect.MessageType {
	return _fastReflection_Environment_messageType
}

// New returns a newly allocated and mutable empty message.
func (x *fastReflection_Environment) New() protoreflect.Message {
	return new(fastReflection_Environment)
}

// Interface unwraps the message reflection interface and
// returns the underlying ProtoMessage interface.
func (x *fastReflection_Environment) Interface() protoreflect.ProtoMessage {
	return (*Environment)(x)
}

// Range iterates over every populated field in an undefined order,
// calling f for each field descriptor and value encountered.
// Range returns immediately if f returns false.
// While iterating, mutating operations may only be performed
// on the current field descriptor.
func (x *fastReflection_Environment) Range(f func(protoreflect.FieldDescriptor, protoreflect.Value) bool) {
	if x.Metadata != nil {
		value := protoreflect.ValueOfMessage(x.Metadata.ProtoReflect())
		if !f(fd_Environment_metadata, value) {
			return
		}
	}
	if x.Id != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Id)
		if !f(fd_Environment_id, value) {
			return
		}
	}
	if x.Creator != "" {
		value := protoreflect.ValueOfString(x.Creator)
		if !f(fd_Environment_creator, value) {
			return
		}
	}
	if x.Provider != uint64(0) {
		value := protoreflect.ValueOfUint64(x.Provider)
		if !f(fd_Environment_provider, value) {
			return
		}
	}
}

// Has reports whether a field is populated.
//
// Some fields have the property of nullability where it is possible to
// distinguish between the default value of a field and whether the field
// was explicitly populated with the default value. Singular message fields,
// member fields of a oneof, and proto2 scalar fields are nullable. Such
// fields are populated only if explicitly set.
//
// In other cases (aside from the nullable cases above),
// a proto3 scalar field is populated if it contains a non-zero value, and
// a repeated field is populated if it is non-empty.
func (x *fastReflection_Environment) Has(fd protoreflect.FieldDescriptor) bool {
	switch fd.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		return x.Metadata != nil
	case "overlock.crossplane.v1beta1.Environment.id":
		return x.Id != uint64(0)
	case "overlock.crossplane.v1beta1.Environment.creator":
		return x.Creator != ""
	case "overlock.crossplane.v1beta1.Environment.provider":
		return x.Provider != uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", fd.FullName()))
	}
}

// Clear clears the field such that a subsequent Has call reports false.
//
// Clearing an extension field clears both the extension type and value
// associated with the given field number.
//
// Clear is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Environment) Clear(fd protoreflect.FieldDescriptor) {
	switch fd.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		x.Metadata = nil
	case "overlock.crossplane.v1beta1.Environment.id":
		x.Id = uint64(0)
	case "overlock.crossplane.v1beta1.Environment.creator":
		x.Creator = ""
	case "overlock.crossplane.v1beta1.Environment.provider":
		x.Provider = uint64(0)
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", fd.FullName()))
	}
}

// Get retrieves the value for a field.
//
// For unpopulated scalars, it returns the default value, where
// the default value of a bytes scalar is guaranteed to be a copy.
// For unpopulated composite types, it returns an empty, read-only view
// of the value; to obtain a mutable reference, use Mutable.
func (x *fastReflection_Environment) Get(descriptor protoreflect.FieldDescriptor) protoreflect.Value {
	switch descriptor.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		value := x.Metadata
		return protoreflect.ValueOfMessage(value.ProtoReflect())
	case "overlock.crossplane.v1beta1.Environment.id":
		value := x.Id
		return protoreflect.ValueOfUint64(value)
	case "overlock.crossplane.v1beta1.Environment.creator":
		value := x.Creator
		return protoreflect.ValueOfString(value)
	case "overlock.crossplane.v1beta1.Environment.provider":
		value := x.Provider
		return protoreflect.ValueOfUint64(value)
	default:
		if descriptor.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", descriptor.FullName()))
	}
}

// Set stores the value for a field.
//
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType.
// When setting a composite type, it is unspecified whether the stored value
// aliases the source's memory in any way. If the composite value is an
// empty, read-only value, then it panics.
//
// Set is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Environment) Set(fd protoreflect.FieldDescriptor, value protoreflect.Value) {
	switch fd.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		x.Metadata = value.Message().Interface().(*Metadata)
	case "overlock.crossplane.v1beta1.Environment.id":
		x.Id = value.Uint()
	case "overlock.crossplane.v1beta1.Environment.creator":
		x.Creator = value.Interface().(string)
	case "overlock.crossplane.v1beta1.Environment.provider":
		x.Provider = value.Uint()
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", fd.FullName()))
	}
}

// Mutable returns a mutable reference to a composite type.
//
// If the field is unpopulated, it may allocate a composite value.
// For a field belonging to a oneof, it implicitly clears any other field
// that may be currently set within the same oneof.
// For extension fields, it implicitly stores the provided ExtensionType
// if not already stored.
// It panics if the field does not contain a composite type.
//
// Mutable is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Environment) Mutable(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		if x.Metadata == nil {
			x.Metadata = new(Metadata)
		}
		return protoreflect.ValueOfMessage(x.Metadata.ProtoReflect())
	case "overlock.crossplane.v1beta1.Environment.id":
		panic(fmt.Errorf("field id of message overlock.crossplane.v1beta1.Environment is not mutable"))
	case "overlock.crossplane.v1beta1.Environment.creator":
		panic(fmt.Errorf("field creator of message overlock.crossplane.v1beta1.Environment is not mutable"))
	case "overlock.crossplane.v1beta1.Environment.provider":
		panic(fmt.Errorf("field provider of message overlock.crossplane.v1beta1.Environment is not mutable"))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", fd.FullName()))
	}
}

// NewField returns a new value that is assignable to the field
// for the given descriptor. For scalars, this returns the default value.
// For lists, maps, and messages, this returns a new, empty, mutable value.
func (x *fastReflection_Environment) NewField(fd protoreflect.FieldDescriptor) protoreflect.Value {
	switch fd.FullName() {
	case "overlock.crossplane.v1beta1.Environment.metadata":
		m := new(Metadata)
		return protoreflect.ValueOfMessage(m.ProtoReflect())
	case "overlock.crossplane.v1beta1.Environment.id":
		return protoreflect.ValueOfUint64(uint64(0))
	case "overlock.crossplane.v1beta1.Environment.creator":
		return protoreflect.ValueOfString("")
	case "overlock.crossplane.v1beta1.Environment.provider":
		return protoreflect.ValueOfUint64(uint64(0))
	default:
		if fd.IsExtension() {
			panic(fmt.Errorf("proto3 declared messages do not support extensions: overlock.crossplane.v1beta1.Environment"))
		}
		panic(fmt.Errorf("message overlock.crossplane.v1beta1.Environment does not contain field %s", fd.FullName()))
	}
}

// WhichOneof reports which field within the oneof is populated,
// returning nil if none are populated.
// It panics if the oneof descriptor does not belong to this message.
func (x *fastReflection_Environment) WhichOneof(d protoreflect.OneofDescriptor) protoreflect.FieldDescriptor {
	switch d.FullName() {
	default:
		panic(fmt.Errorf("%s is not a oneof field in overlock.crossplane.v1beta1.Environment", d.FullName()))
	}
	panic("unreachable")
}

// GetUnknown retrieves the entire list of unknown fields.
// The caller may only mutate the contents of the RawFields
// if the mutated bytes are stored back into the message with SetUnknown.
func (x *fastReflection_Environment) GetUnknown() protoreflect.RawFields {
	return x.unknownFields
}

// SetUnknown stores an entire list of unknown fields.
// The raw fields must be syntactically valid according to the wire format.
// An implementation may panic if this is not the case.
// Once stored, the caller must not mutate the content of the RawFields.
// An empty RawFields may be passed to clear the fields.
//
// SetUnknown is a mutating operation and unsafe for concurrent use.
func (x *fastReflection_Environment) SetUnknown(fields protoreflect.RawFields) {
	x.unknownFields = fields
}

// IsValid reports whether the message is valid.
//
// An invalid message is an empty, read-only value.
//
// An invalid message often corresponds to a nil pointer of the concrete
// message type, but the details are implementation dependent.
// Validity is not part of the protobuf data model, and may not
// be preserved in marshaling or other operations.
func (x *fastReflection_Environment) IsValid() bool {
	return x != nil
}

// ProtoMethods returns optional fastReflectionFeature-path implementations of various operations.
// This method may return nil.
//
// The returned methods type is identical to
// "google.golang.org/protobuf/runtime/protoiface".Methods.
// Consult the protoiface package documentation for details.
func (x *fastReflection_Environment) ProtoMethods() *protoiface.Methods {
	size := func(input protoiface.SizeInput) protoiface.SizeOutput {
		x := input.Message.Interface().(*Environment)
		if x == nil {
			return protoiface.SizeOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Size:              0,
			}
		}
		options := runtime.SizeInputToOptions(input)
		_ = options
		var n int
		var l int
		_ = l
		if x.Metadata != nil {
			l = options.Size(x.Metadata)
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.Id != 0 {
			n += 1 + runtime.Sov(uint64(x.Id))
		}
		l = len(x.Creator)
		if l > 0 {
			n += 1 + l + runtime.Sov(uint64(l))
		}
		if x.Provider != 0 {
			n += 1 + runtime.Sov(uint64(x.Provider))
		}
		if x.unknownFields != nil {
			n += len(x.unknownFields)
		}
		return protoiface.SizeOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Size:              n,
		}
	}

	marshal := func(input protoiface.MarshalInput) (protoiface.MarshalOutput, error) {
		x := input.Message.Interface().(*Environment)
		if x == nil {
			return protoiface.MarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Buf:               input.Buf,
			}, nil
		}
		options := runtime.MarshalInputToOptions(input)
		_ = options
		size := options.Size(x)
		dAtA := make([]byte, size)
		i := len(dAtA)
		_ = i
		var l int
		_ = l
		if x.unknownFields != nil {
			i -= len(x.unknownFields)
			copy(dAtA[i:], x.unknownFields)
		}
		if x.Provider != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Provider))
			i--
			dAtA[i] = 0x20
		}
		if len(x.Creator) > 0 {
			i -= len(x.Creator)
			copy(dAtA[i:], x.Creator)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(x.Creator)))
			i--
			dAtA[i] = 0x1a
		}
		if x.Id != 0 {
			i = runtime.EncodeVarint(dAtA, i, uint64(x.Id))
			i--
			dAtA[i] = 0x10
		}
		if x.Metadata != nil {
			encoded, err := options.Marshal(x.Metadata)
			if err != nil {
				return protoiface.MarshalOutput{
					NoUnkeyedLiterals: input.NoUnkeyedLiterals,
					Buf:               input.Buf,
				}, err
			}
			i -= len(encoded)
			copy(dAtA[i:], encoded)
			i = runtime.EncodeVarint(dAtA, i, uint64(len(encoded)))
			i--
			dAtA[i] = 0xa
		}
		if input.Buf != nil {
			input.Buf = append(input.Buf, dAtA...)
		} else {
			input.Buf = dAtA
		}
		return protoiface.MarshalOutput{
			NoUnkeyedLiterals: input.NoUnkeyedLiterals,
			Buf:               input.Buf,
		}, nil
	}
	unmarshal := func(input protoiface.UnmarshalInput) (protoiface.UnmarshalOutput, error) {
		x := input.Message.Interface().(*Environment)
		if x == nil {
			return protoiface.UnmarshalOutput{
				NoUnkeyedLiterals: input.NoUnkeyedLiterals,
				Flags:             input.Flags,
			}, nil
		}
		options := runtime.UnmarshalInputToOptions(input)
		_ = options
		dAtA := input.Buf
		l := len(dAtA)
		iNdEx := 0
		for iNdEx < l {
			preIndex := iNdEx
			var wire uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
				}
				if iNdEx >= l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				wire |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			fieldNum := int32(wire >> 3)
			wireType := int(wire & 0x7)
			if wireType == 4 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Environment: wiretype end group for non-group")
			}
			if fieldNum <= 0 {
				return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: Environment: illegal tag %d (wire type %d)", fieldNum, wire)
			}
			switch fieldNum {
			case 1:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Metadata", wireType)
				}
				var msglen int
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					msglen |= int(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				if msglen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + msglen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if x.Metadata == nil {
					x.Metadata = &Metadata{}
				}
				if err := options.Unmarshal(dAtA[iNdEx:postIndex], x.Metadata); err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				iNdEx = postIndex
			case 2:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
				}
				x.Id = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Id |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			case 3:
				if wireType != 2 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
				}
				var stringLen uint64
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					stringLen |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
				intStringLen := int(stringLen)
				if intStringLen < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				postIndex := iNdEx + intStringLen
				if postIndex < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if postIndex > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				x.Creator = string(dAtA[iNdEx:postIndex])
				iNdEx = postIndex
			case 4:
				if wireType != 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, fmt.Errorf("proto: wrong wireType = %d for field Provider", wireType)
				}
				x.Provider = 0
				for shift := uint(0); ; shift += 7 {
					if shift >= 64 {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrIntOverflow
					}
					if iNdEx >= l {
						return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
					}
					b := dAtA[iNdEx]
					iNdEx++
					x.Provider |= uint64(b&0x7F) << shift
					if b < 0x80 {
						break
					}
				}
			default:
				iNdEx = preIndex
				skippy, err := runtime.Skip(dAtA[iNdEx:])
				if err != nil {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, err
				}
				if (skippy < 0) || (iNdEx+skippy) < 0 {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, runtime.ErrInvalidLength
				}
				if (iNdEx + skippy) > l {
					return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
				}
				if !options.DiscardUnknown {
					x.unknownFields = append(x.unknownFields, dAtA[iNdEx:iNdEx+skippy]...)
				}
				iNdEx += skippy
			}
		}

		if iNdEx > l {
			return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, io.ErrUnexpectedEOF
		}
		return protoiface.UnmarshalOutput{NoUnkeyedLiterals: input.NoUnkeyedLiterals, Flags: input.Flags}, nil
	}
	return &protoiface.Methods{
		NoUnkeyedLiterals: struct{}{},
		Flags:             protoiface.SupportMarshalDeterministic | protoiface.SupportUnmarshalDiscardUnknown,
		Size:              size,
		Marshal:           marshal,
		Unmarshal:         unmarshal,
		Merge:             nil,
		CheckInitialized:  nil,
	}
}

// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.0
// 	protoc        (unknown)
// source: overlock/crossplane/v1beta1/environment.proto

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Environment
type Environment struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// metadata
	Metadata *Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	// id
	Id uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	// creator
	Creator string `protobuf:"bytes,3,opt,name=creator,proto3" json:"creator,omitempty"`
	// provider
	Provider uint64 `protobuf:"varint,4,opt,name=provider,proto3" json:"provider,omitempty"`
}

func (x *Environment) Reset() {
	*x = Environment{}
	if protoimpl.UnsafeEnabled {
		mi := &file_overlock_crossplane_v1beta1_environment_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Environment) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Environment) ProtoMessage() {}

// Deprecated: Use Environment.ProtoReflect.Descriptor instead.
func (*Environment) Descriptor() ([]byte, []int) {
	return file_overlock_crossplane_v1beta1_environment_proto_rawDescGZIP(), []int{0}
}

func (x *Environment) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Environment) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Environment) GetCreator() string {
	if x != nil {
		return x.Creator
	}
	return ""
}

func (x *Environment) GetProvider() uint64 {
	if x != nil {
		return x.Provider
	}
	return 0
}

var File_overlock_crossplane_v1beta1_environment_proto protoreflect.FileDescriptor

var file_overlock_crossplane_v1beta1_environment_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x6f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2f, 0x63, 0x72, 0x6f, 0x73, 0x73,
	0x70, 0x6c, 0x61, 0x6e, 0x65, 0x2f, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2f, 0x65, 0x6e,
	0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x1b, 0x6f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2e, 0x63, 0x72, 0x6f, 0x73, 0x73, 0x70,
	0x6c, 0x61, 0x6e, 0x65, 0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x1a, 0x2a, 0x6f, 0x76,
	0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2f, 0x63, 0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e,
	0x65, 0x2f, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x96, 0x01, 0x0a, 0x0b, 0x45, 0x6e, 0x76,
	0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x41, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x25, 0x2e, 0x6f, 0x76, 0x65,
	0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2e, 0x63, 0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65,
	0x2e, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x6f, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65,
	0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x04, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x76, 0x69, 0x64, 0x65,
	0x72, 0x42, 0x97, 0x02, 0x0a, 0x1f, 0x63, 0x6f, 0x6d, 0x2e, 0x6f, 0x76, 0x65, 0x72, 0x6c, 0x6f,
	0x63, 0x6b, 0x2e, 0x63, 0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x2e, 0x76, 0x31,
	0x62, 0x65, 0x74, 0x61, 0x31, 0x42, 0x10, 0x45, 0x6e, 0x76, 0x69, 0x72, 0x6f, 0x6e, 0x6d, 0x65,
	0x6e, 0x74, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x54, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2d, 0x6e,
	0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x6f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x2f, 0x63, 0x72, 0x6f, 0x73, 0x73,
	0x70, 0x6c, 0x61, 0x6e, 0x65, 0x2f, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x3b, 0x63, 0x72,
	0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x76, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0xa2,
	0x02, 0x03, 0x4f, 0x43, 0x58, 0xaa, 0x02, 0x1b, 0x4f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b,
	0x2e, 0x43, 0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x2e, 0x56, 0x31, 0x62, 0x65,
	0x74, 0x61, 0x31, 0xca, 0x02, 0x1b, 0x4f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x5c, 0x43,
	0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x5c, 0x56, 0x31, 0x62, 0x65, 0x74, 0x61,
	0x31, 0xe2, 0x02, 0x27, 0x4f, 0x76, 0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x5c, 0x43, 0x72, 0x6f,
	0x73, 0x73, 0x70, 0x6c, 0x61, 0x6e, 0x65, 0x5c, 0x56, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x5c,
	0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x1d, 0x4f, 0x76,
	0x65, 0x72, 0x6c, 0x6f, 0x63, 0x6b, 0x3a, 0x3a, 0x43, 0x72, 0x6f, 0x73, 0x73, 0x70, 0x6c, 0x61,
	0x6e, 0x65, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x65, 0x74, 0x61, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_overlock_crossplane_v1beta1_environment_proto_rawDescOnce sync.Once
	file_overlock_crossplane_v1beta1_environment_proto_rawDescData = file_overlock_crossplane_v1beta1_environment_proto_rawDesc
)

func file_overlock_crossplane_v1beta1_environment_proto_rawDescGZIP() []byte {
	file_overlock_crossplane_v1beta1_environment_proto_rawDescOnce.Do(func() {
		file_overlock_crossplane_v1beta1_environment_proto_rawDescData = protoimpl.X.CompressGZIP(file_overlock_crossplane_v1beta1_environment_proto_rawDescData)
	})
	return file_overlock_crossplane_v1beta1_environment_proto_rawDescData
}

var file_overlock_crossplane_v1beta1_environment_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_overlock_crossplane_v1beta1_environment_proto_goTypes = []interface{}{
	(*Environment)(nil), // 0: overlock.crossplane.v1beta1.Environment
	(*Metadata)(nil),    // 1: overlock.crossplane.v1beta1.Metadata
}
var file_overlock_crossplane_v1beta1_environment_proto_depIdxs = []int32{
	1, // 0: overlock.crossplane.v1beta1.Environment.metadata:type_name -> overlock.crossplane.v1beta1.Metadata
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_overlock_crossplane_v1beta1_environment_proto_init() }
func file_overlock_crossplane_v1beta1_environment_proto_init() {
	if File_overlock_crossplane_v1beta1_environment_proto != nil {
		return
	}
	file_overlock_crossplane_v1beta1_metadata_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_overlock_crossplane_v1beta1_environment_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Environment); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_overlock_crossplane_v1beta1_environment_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_overlock_crossplane_v1beta1_environment_proto_goTypes,
		DependencyIndexes: file_overlock_crossplane_v1beta1_environment_proto_depIdxs,
		MessageInfos:      file_overlock_crossplane_v1beta1_environment_proto_msgTypes,
	}.Build()
	File_overlock_crossplane_v1beta1_environment_proto = out.File
	file_overlock_crossplane_v1beta1_environment_proto_rawDesc = nil
	file_overlock_crossplane_v1beta1_environment_proto_goTypes = nil
	file_overlock_crossplane_v1beta1_environment_proto_depIdxs = nil
}
