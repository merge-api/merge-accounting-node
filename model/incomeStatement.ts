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
import { ReportItem } from './reportItem';

/**
* # The IncomeStatement Object ### Description The `IncomeStatement` object is used to represent a company\'s income statements.  ### Usage Example Fetch from the `GET IncomeStatement` endpoint and view a company\'s income statement for a given period.
*/
export class IncomeStatement {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The income statement\'s name.
    */
    'name'?: string | null;
    /**
    * The income statement\'s start period.
    */
    'start_period'?: Date | null;
    /**
    * The income statement\'s end period.
    */
    'end_period'?: Date | null;
    'income'?: Array<ReportItem>;
    'cost_of_sales'?: Array<ReportItem>;
    /**
    * The income statement\'s gross profit.
    */
    'gross_profit'?: number | null;
    'operating_expenses'?: Array<ReportItem>;
    /**
    * The income statement\'s net operating profit.
    */
    'net_operating_income'?: number | null;
    'non_operating_expenses'?: Array<ReportItem>;
    /**
    * The income statement\'s net income.
    */
    'net_income'?: number | null;
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
            "name": "start_period",
            "baseName": "start_period",
            "type": "Date"
        },
        {
            "name": "end_period",
            "baseName": "end_period",
            "type": "Date"
        },
        {
            "name": "income",
            "baseName": "income",
            "type": "Array<ReportItem>"
        },
        {
            "name": "cost_of_sales",
            "baseName": "cost_of_sales",
            "type": "Array<ReportItem>"
        },
        {
            "name": "gross_profit",
            "baseName": "gross_profit",
            "type": "number"
        },
        {
            "name": "operating_expenses",
            "baseName": "operating_expenses",
            "type": "Array<ReportItem>"
        },
        {
            "name": "net_operating_income",
            "baseName": "net_operating_income",
            "type": "number"
        },
        {
            "name": "non_operating_expenses",
            "baseName": "non_operating_expenses",
            "type": "Array<ReportItem>"
        },
        {
            "name": "net_income",
            "baseName": "net_income",
            "type": "number"
        },
        {
            "name": "remote_was_deleted",
            "baseName": "remote_was_deleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IncomeStatement.attributeTypeMap;
    }
}

