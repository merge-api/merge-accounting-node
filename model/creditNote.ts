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
import { CreditNoteStatusEnum } from './creditNoteStatusEnum';
import { CurrencyEnum } from './currencyEnum';

/**
* # The CreditNote Object ### Description The `CreditNote` object is used to represent a refund or credit of payment.  ### Usage Example Fetch from the `LIST CreditNotes` endpoint and view a company\'s credit notes.
*/
export class CreditNote {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The credit note\'s transaction date.
    */
    'transaction_date'?: Date | null;
    /**
    * The credit note\'s status.
    */
    'status'?: CreditNoteStatusEnum | null;
    /**
    * The credit note\'s total amount.
    */
    'total_amount'?: number | null;
    /**
    * The credit note\'s remaining credit.
    */
    'remaining_credit'?: number | null;
    /**
    * The credit note\'s currency.
    */
    'currency'?: CurrencyEnum | null;
    /**
    * When the third party\'s credit note was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * When the third party\'s credit note was updated.
    */
    'remote_updated_at'?: Date | null;
    /**
    * Array of `Payment` object IDs
    */
    'payments'?: Array<string>;
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
            "name": "transaction_date",
            "baseName": "transaction_date",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CreditNoteStatusEnum"
        },
        {
            "name": "total_amount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "remaining_credit",
            "baseName": "remaining_credit",
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
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<string>"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CreditNote.attributeTypeMap;
    }
}

