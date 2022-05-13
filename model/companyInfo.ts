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
import { Address } from './address';
import { CurrencyEnum } from './currencyEnum';
import { RemoteData } from './remoteData';

/**
* # The CompanyInfo Object ### Description The `CompanyInfo` object is used to represent a company\'s information.  ### Usage Example Fetch from the `GET CompanyInfo` endpoint and view a company\'s information.
*/
export class CompanyInfo {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The company\'s name.
    */
    'name'?: string | null;
    /**
    * The company\'s legal name.
    */
    'legal_name'?: string | null;
    /**
    * The company\'s tax number.
    */
    'tax_number'?: string | null;
    /**
    * The company\'s fiscal year end month.
    */
    'fiscal_year_end_month'?: number | null;
    /**
    * The company\'s fiscal year end day.
    */
    'fiscal_year_end_day'?: number | null;
    /**
    * The currency set in the company\'s accounting platform.
    */
    'currency'?: CurrencyEnum | null;
    /**
    * When the third party\'s company was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * The company\'s urls.
    */
    'urls'?: Array<string> | null;
    'addresses'?: Array<Address>;
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
            "name": "legal_name",
            "baseName": "legal_name",
            "type": "string"
        },
        {
            "name": "tax_number",
            "baseName": "tax_number",
            "type": "string"
        },
        {
            "name": "fiscal_year_end_month",
            "baseName": "fiscal_year_end_month",
            "type": "number"
        },
        {
            "name": "fiscal_year_end_day",
            "baseName": "fiscal_year_end_day",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyEnum"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "Array<string>"
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<Address>"
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
        return CompanyInfo.attributeTypeMap;
    }
}

