
pub mod overlock {
    pub mod crossplane {
        pub mod v1beta1 {
            include!("overlock.crossplane.v1beta1.rs");
        }
    }
    pub mod storage {
        pub mod v1beta1 {
            include!("overlock.storage.v1beta1.rs");
        }
    }
}

pub mod cosmos {
    pub mod base {
        pub mod query {
            pub mod v1beta1 {
                include!("cosmos.base.query.v1beta1.rs");
            }
        }
    }
}
