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
import { AccountStatusEnum } from './accountStatusEnum';
import { ClassificationEnum } from './classificationEnum';
import { CurrencyEnum } from './currencyEnum';
import { RemoteData } from './remoteData';

/**
* # The Account Object ### Description The `Account` object is what businesses use to track transactions. Accountants often call accounts \"ledgers\".  ### Usage Example Fetch from the `LIST Accounts` endpoint and view a company\'s accounts.
*/
export class Account {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The account\'s name.
    */
    'name'?: string | null;
    /**
    * The account\'s description.
    */
    'description'?: string | null;
    /**
    * The account\'s classification.
    */
    'classification'?: ClassificationEnum | null;
    /**
    * The account\'s type.
    */
    'type'?: string | null;
    /**
    * The account\'s status.
    */
    'status'?: AccountStatusEnum | null;
    /**
    * The account\'s current balance.
    */
    'current_balance'?: number | null;
    /**
    * The account\'s currency.
    */
    'currency'?: CurrencyEnum | null;
    /**
    * The account\'s number.
    */
    'account_number'?: string | null;
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "classification",
            "baseName": "classification",
            "type": "ClassificationEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountStatusEnum"
        },
        {
            "name": "current_balance",
            "baseName": "current_balance",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyEnum"
        },
        {
            "name": "account_number",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}

