/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { AccountingPhoneNumber } from './accountingPhoneNumber';
import { RemoteData } from './remoteData';
import { Status7d1Enum } from './status7d1Enum';

/**
* # The Contact Object ### Description The `Contact` object is used to represent a Contact. This can be either a supplier or a customer.  ### Usage Example Fetch from the `LIST Contacts` endpoint and view a company\'s contacts.
*/
export class Contact {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The contact\'s name.
    */
    'name'?: string | null;
    /**
    * Whether the contact is a supplier.
    */
    'is_supplier'?: boolean | null;
    /**
    * Whether the contact is a customer.
    */
    'is_customer'?: boolean | null;
    /**
    * The contact\'s email address.
    */
    'email_address'?: string | null;
    /**
    * The contact\'s tax number.
    */
    'tax_number'?: string | null;
    /**
    * The contact\'s status
    */
    'status'?: Status7d1Enum | null;
    /**
    * The currency the contact\'s transactions are in.
    */
    'currency'?: string | null;
    /**
    * When the third party\'s contact was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * `Address` object IDs for the given `Contacts` object.
    */
    'addresses'?: Array<string>;
    /**
    * `AccountingPhoneNumber` object for the given `Contacts` object.
    */
    'phone_numbers'?: Array<AccountingPhoneNumber>;
    /**
    * Indicates whether or not this object has been deleted on the third-party.
    */
    'remote_was_deleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "is_supplier",
            "baseName": "is_supplier",
            "type": "boolean"
        },
        {
            "name": "is_customer",
            "baseName": "is_customer",
            "type": "boolean"
        },
        {
            "name": "email_address",
            "baseName": "email_address",
            "type": "string"
        },
        {
            "name": "tax_number",
            "baseName": "tax_number",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Status7d1Enum"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<string>"
        },
        {
            "name": "phone_numbers",
            "baseName": "phone_numbers",
            "type": "Array<AccountingPhoneNumber>"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}

