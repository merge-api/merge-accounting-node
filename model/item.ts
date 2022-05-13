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
import { RemoteData } from './remoteData';
import { Status7d1Enum } from './status7d1Enum';

/**
* # The Item Object ### Description The `Item` object is used to represent an item that a company buys, sells, or resells, such as products and services.  ### Usage Example Fetch from the `LIST Items` endpoint and view a company\'s items.
*/
export class Item {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The item\'s name.
    */
    'name'?: string | null;
    /**
    * The item\'s status.
    */
    'status'?: Status7d1Enum | null;
    /**
    * The item\'s unit price.
    */
    'unit_price'?: number | null;
    /**
    * The item\'s purchase price.
    */
    'purchase_price'?: number | null;
    'purchase_account'?: string | null;
    'sales_account'?: string | null;
    /**
    * When the third party\'s item note was updated.
    */
    'remote_updated_at'?: Date | null;
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
            "name": "status",
            "baseName": "status",
            "type": "Status7d1Enum"
        },
        {
            "name": "unit_price",
            "baseName": "unit_price",
            "type": "number"
        },
        {
            "name": "purchase_price",
            "baseName": "purchase_price",
            "type": "number"
        },
        {
            "name": "purchase_account",
            "baseName": "purchase_account",
            "type": "string"
        },
        {
            "name": "sales_account",
            "baseName": "sales_account",
            "type": "string"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Item.attributeTypeMap;
    }
}

