variable "tenancy_ocid" {
  description = "OCI tenancy OCID"
  type        = string
}

variable "user_ocid" {
  description = "OCI user OCID (for API key auth)"
  type        = string
}

variable "fingerprint" {
  description = "API key fingerprint"
  type        = string
}

variable "private_key_path" {
  description = "Path to OCI API private key"
  type        = string
  default     = "~/.oci/oci_api_key.pem"
}

variable "region" {
  description = "OCI region"
  type        = string
  default     = "eu-frankfurt-1"
}

variable "compartment_ocid" {
  description = "Compartment OCID (use tenancy OCID for root)"
  type        = string
}

variable "service_name" {
  description = "Application name"
  type        = string
  default     = "reactops"
}

variable "availability_domain" {
  description = "Availability domain for the ARM VM"
  type        = string
  default     = "FVLm:EU-FRANKFURT-1-AD-3"
}

variable "ssh_public_key" {
  description = "SSH public key to inject into the VM"
  type        = string
}