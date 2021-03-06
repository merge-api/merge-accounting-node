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
import { SyncStatusStatusEnum } from './syncStatusStatusEnum';

/**
* # The SyncStatus Object ### Description The `SyncStatus` object is used to represent the syncing state of an account  ### Usage Example View the `SyncStatus` for an account to see how recently its models were synced.
*/
export class SyncStatus {
    'model_name': string;
    'model_id': string;
    'last_sync_start': Date;
    'next_sync_start': Date;
    'status': SyncStatusStatusEnum;
    'is_initial_sync': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "model_name",
            "baseName": "model_name",
            "type": "string"
        },
        {
            "name": "model_id",
            "baseName": "model_id",
            "type": "string"
        },
        {
            "name": "last_sync_start",
            "baseName": "last_sync_start",
            "type": "Date"
        },
        {
            "name": "next_sync_start",
            "baseName": "next_sync_start",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SyncStatusStatusEnum"
        },
        {
            "name": "is_initial_sync",
            "baseName": "is_initial_sync",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SyncStatus.attributeTypeMap;
    }
}

