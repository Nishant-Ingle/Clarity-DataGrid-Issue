import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Person {
  name: string
  blogurl: string
  twitter: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clarity-demo-app';
  collapsed : boolean = false;

  hosts = [
    {type: 'vcenter', issuer: 'OpenSSL', hostname: 'vcenter-1.vrack.vsphere.local', 
    validFrom: 'May 10 2020', validUntil: 'May 20 2020', status: 'Active', operationStatus: 'Installed'},
    {type: 'vcenter', issuer: 'OpenSSL', hostname: 'vcenter-1.vrack.vsphere.local.vcenter-1.vrack.vsphere.local.vcenter-1.vrack.vsphere.local', 
    validFrom: 'May 10 2020', validUntil: 'May 20 2020', status: 'Active', operationStatus: 'Installed'},
    {type: 'vcenter', issuer: 'OpenSSL', hostname: 'vcenter-1.vrack.vsphere.local', 
    validFrom: 'May 10 2020', validUntil: 'May 20 2020', status: 'Active', operationStatus: 'Installed'}
  ];

  key: string = "-----BEGIN CERTIFICATE----- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum -----END CERTIFICATE-----";

}
