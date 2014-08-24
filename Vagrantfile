# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder "./src", "/timetracker"
  # config.vm.network :forwarded_port, host: 8080, guest: 80
  config.vm.network :private_network, ip: "192.168.2.201"

  config.vm.provider :virtualbox do |v|
	  v.customize ["modifyvm", :id, "--name", "timetracker"]
	  v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
	  v.customize ["modifyvm", :id, "--memory", 1024]
	  v.customize ["modifyvm", :id, "--cpus", 2]
	  v.customize ["modifyvm", :id, "--ioapic", "on"]
  end

  config.vm.provision "ansible" do |ansible|
	  ansible.playbook = "provisioning/playbook.yml"

	  # run as root
	  ansible.sudo = true

	  ansible.extra_vars = { ansible_ssh_user: 'vagrant' }
  end

  config.vm.define :timetracker do |timetracker|
	  timetracker.vm.hostname = "timetracker"
  end

end
