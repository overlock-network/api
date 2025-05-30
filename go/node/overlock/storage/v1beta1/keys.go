package v1beta1

const (
	// ModuleName defines the module name
	ModuleName = "storage"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_storage"

	RegistryKey = "Registry/value/"

	RegistryCountKey = "Registry/count/"

	RegistryCreatedEvent = "Registry-created"

	RegistryDeletedEvent = "Registry-deleted"

	RegistryIndex = "id"
)

var (
	ParamsKey = []byte("p_storage")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
