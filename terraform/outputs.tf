output "vm_public_ip" {
  description = "Public IP of the app VM"
  value       = oci_core_instance.app.public_ip
}

output "vm_private_ip" {
  description = "Private IP of the app VM"
  value       = oci_core_instance.app.private_ip
}

output "app_url" {
  description = "Public URL"
  value       = "http://${oci_core_instance.app.public_ip}"
}

output "ssh_command" {
  description = "SSH command"
  value       = "ssh ubuntu@${oci_core_instance.app.public_ip}"
}