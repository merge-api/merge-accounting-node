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
import { ValidationProblemSource } from './validationProblemSource';

export class ErrorValidationProblem {
    'source'?: ValidationProblemSource;
    'title': string;
    'detail': string;
    'problem_type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "source",
            "baseName": "source",
            "type": "ValidationProblemSource"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "problem_type",
            "baseName": "problem_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ErrorValidationProblem.attributeTypeMap;
    }
}

