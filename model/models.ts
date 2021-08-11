import localVarRequest from 'request';

export * from './account';
export * from './accountIntegration';
export * from './accountStatusEnum';
export * from './accountToken';
export * from './accountingAttachment';
export * from './accountingPhoneNumber';
export * from './address';
export * from './availableActions';
export * from './balanceSheet';
export * from './cashFlowStatement';
export * from './classificationEnum';
export * from './companyInfo';
export * from './contact';
export * from './countryEnum';
export * from './creditNote';
export * from './creditNoteStatusEnum';
export * from './currencyEnum';
export * from './dataPassthroughRequest';
export * from './endUserDetailsRequest';
export * from './generateRemoteKeyRequest';
export * from './invoice';
export * from './invoiceLineItem';
export * from './issue';
export * from './issueStatusEnum';
export * from './item';
export * from './journalEntry';
export * from './journalLine';
export * from './linkToken';
export * from './methodEnum';
export * from './modelOperation';
export * from './paginatedAccountList';
export * from './paginatedAccountingAttachmentList';
export * from './paginatedBalanceSheetList';
export * from './paginatedCashFlowStatementList';
export * from './paginatedCompanyInfoList';
export * from './paginatedContactList';
export * from './paginatedCreditNoteList';
export * from './paginatedInvoiceList';
export * from './paginatedIssueList';
export * from './paginatedItemList';
export * from './paginatedJournalEntryList';
export * from './paginatedPaymentList';
export * from './paginatedProfitAndLossList';
export * from './paginatedPurchaseOrderList';
export * from './paginatedSyncStatusList';
export * from './paginatedTaxRateList';
export * from './paginatedTrackingCategoryList';
export * from './payment';
export * from './profitAndLoss';
export * from './purchaseOrder';
export * from './purchaseOrderLineItem';
export * from './purchaseOrderStatusEnum';
export * from './remoteData';
export * from './remoteKey';
export * from './remoteKeyForRegenerationRequest';
export * from './remoteResponse';
export * from './reportItem';
export * from './stateEnum';
export * from './status7d1Enum';
export * from './syncStatus';
export * from './syncStatusStatusEnum';
export * from './taxRate';
export * from './trackingCategory';
export * from './typeEnum';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AccountIntegration } from './accountIntegration';
import { AccountStatusEnum } from './accountStatusEnum';
import { AccountToken } from './accountToken';
import { AccountingAttachment } from './accountingAttachment';
import { AccountingPhoneNumber } from './accountingPhoneNumber';
import { Address } from './address';
import { AvailableActions } from './availableActions';
import { BalanceSheet } from './balanceSheet';
import { CashFlowStatement } from './cashFlowStatement';
import { ClassificationEnum } from './classificationEnum';
import { CompanyInfo } from './companyInfo';
import { Contact } from './contact';
import { CountryEnum } from './countryEnum';
import { CreditNote } from './creditNote';
import { CreditNoteStatusEnum } from './creditNoteStatusEnum';
import { CurrencyEnum } from './currencyEnum';
import { DataPassthroughRequest } from './dataPassthroughRequest';
import { EndUserDetailsRequest } from './endUserDetailsRequest';
import { GenerateRemoteKeyRequest } from './generateRemoteKeyRequest';
import { Invoice } from './invoice';
import { InvoiceLineItem } from './invoiceLineItem';
import { Issue } from './issue';
import { IssueStatusEnum } from './issueStatusEnum';
import { Item } from './item';
import { JournalEntry } from './journalEntry';
import { JournalLine } from './journalLine';
import { LinkToken } from './linkToken';
import { MethodEnum } from './methodEnum';
import { ModelOperation } from './modelOperation';
import { PaginatedAccountList } from './paginatedAccountList';
import { PaginatedAccountingAttachmentList } from './paginatedAccountingAttachmentList';
import { PaginatedBalanceSheetList } from './paginatedBalanceSheetList';
import { PaginatedCashFlowStatementList } from './paginatedCashFlowStatementList';
import { PaginatedCompanyInfoList } from './paginatedCompanyInfoList';
import { PaginatedContactList } from './paginatedContactList';
import { PaginatedCreditNoteList } from './paginatedCreditNoteList';
import { PaginatedInvoiceList } from './paginatedInvoiceList';
import { PaginatedIssueList } from './paginatedIssueList';
import { PaginatedItemList } from './paginatedItemList';
import { PaginatedJournalEntryList } from './paginatedJournalEntryList';
import { PaginatedPaymentList } from './paginatedPaymentList';
import { PaginatedProfitAndLossList } from './paginatedProfitAndLossList';
import { PaginatedPurchaseOrderList } from './paginatedPurchaseOrderList';
import { PaginatedSyncStatusList } from './paginatedSyncStatusList';
import { PaginatedTaxRateList } from './paginatedTaxRateList';
import { PaginatedTrackingCategoryList } from './paginatedTrackingCategoryList';
import { Payment } from './payment';
import { ProfitAndLoss } from './profitAndLoss';
import { PurchaseOrder } from './purchaseOrder';
import { PurchaseOrderLineItem } from './purchaseOrderLineItem';
import { PurchaseOrderStatusEnum } from './purchaseOrderStatusEnum';
import { RemoteData } from './remoteData';
import { RemoteKey } from './remoteKey';
import { RemoteKeyForRegenerationRequest } from './remoteKeyForRegenerationRequest';
import { RemoteResponse } from './remoteResponse';
import { ReportItem } from './reportItem';
import { StateEnum } from './stateEnum';
import { Status7d1Enum } from './status7d1Enum';
import { SyncStatus } from './syncStatus';
import { SyncStatusStatusEnum } from './syncStatusStatusEnum';
import { TaxRate } from './taxRate';
import { TrackingCategory } from './trackingCategory';
import { TypeEnum } from './typeEnum';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AccountIntegration.CategoriesEnum": AccountIntegration.CategoriesEnum,
        "AccountStatusEnum": AccountStatusEnum,
        "ClassificationEnum": ClassificationEnum,
        "CountryEnum": CountryEnum,
        "CreditNoteStatusEnum": CreditNoteStatusEnum,
        "CurrencyEnum": CurrencyEnum,
        "EndUserDetailsRequest.CategoriesEnum": EndUserDetailsRequest.CategoriesEnum,
        "IssueStatusEnum": IssueStatusEnum,
        "MethodEnum": MethodEnum,
        "PurchaseOrderStatusEnum": PurchaseOrderStatusEnum,
        "StateEnum": StateEnum,
        "Status7d1Enum": Status7d1Enum,
        "SyncStatusStatusEnum": SyncStatusStatusEnum,
        "TypeEnum": TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountIntegration": AccountIntegration,
    "AccountToken": AccountToken,
    "AccountingAttachment": AccountingAttachment,
    "AccountingPhoneNumber": AccountingPhoneNumber,
    "Address": Address,
    "AvailableActions": AvailableActions,
    "BalanceSheet": BalanceSheet,
    "CashFlowStatement": CashFlowStatement,
    "CompanyInfo": CompanyInfo,
    "Contact": Contact,
    "CreditNote": CreditNote,
    "DataPassthroughRequest": DataPassthroughRequest,
    "EndUserDetailsRequest": EndUserDetailsRequest,
    "GenerateRemoteKeyRequest": GenerateRemoteKeyRequest,
    "Invoice": Invoice,
    "InvoiceLineItem": InvoiceLineItem,
    "Issue": Issue,
    "Item": Item,
    "JournalEntry": JournalEntry,
    "JournalLine": JournalLine,
    "LinkToken": LinkToken,
    "ModelOperation": ModelOperation,
    "PaginatedAccountList": PaginatedAccountList,
    "PaginatedAccountingAttachmentList": PaginatedAccountingAttachmentList,
    "PaginatedBalanceSheetList": PaginatedBalanceSheetList,
    "PaginatedCashFlowStatementList": PaginatedCashFlowStatementList,
    "PaginatedCompanyInfoList": PaginatedCompanyInfoList,
    "PaginatedContactList": PaginatedContactList,
    "PaginatedCreditNoteList": PaginatedCreditNoteList,
    "PaginatedInvoiceList": PaginatedInvoiceList,
    "PaginatedIssueList": PaginatedIssueList,
    "PaginatedItemList": PaginatedItemList,
    "PaginatedJournalEntryList": PaginatedJournalEntryList,
    "PaginatedPaymentList": PaginatedPaymentList,
    "PaginatedProfitAndLossList": PaginatedProfitAndLossList,
    "PaginatedPurchaseOrderList": PaginatedPurchaseOrderList,
    "PaginatedSyncStatusList": PaginatedSyncStatusList,
    "PaginatedTaxRateList": PaginatedTaxRateList,
    "PaginatedTrackingCategoryList": PaginatedTrackingCategoryList,
    "Payment": Payment,
    "ProfitAndLoss": ProfitAndLoss,
    "PurchaseOrder": PurchaseOrder,
    "PurchaseOrderLineItem": PurchaseOrderLineItem,
    "RemoteData": RemoteData,
    "RemoteKey": RemoteKey,
    "RemoteKeyForRegenerationRequest": RemoteKeyForRegenerationRequest,
    "RemoteResponse": RemoteResponse,
    "ReportItem": ReportItem,
    "SyncStatus": SyncStatus,
    "TaxRate": TaxRate,
    "TrackingCategory": TrackingCategory,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
