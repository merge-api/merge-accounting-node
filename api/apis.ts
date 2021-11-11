export * from './accountDetailsApi';
import { AccountDetailsApi } from './accountDetailsApi';
export * from './accountTokenApi';
import { AccountTokenApi } from './accountTokenApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './addressesApi';
import { AddressesApi } from './addressesApi';
export * from './attachmentsApi';
import { AttachmentsApi } from './attachmentsApi';
export * from './availableActionsApi';
import { AvailableActionsApi } from './availableActionsApi';
export * from './balanceSheetsApi';
import { BalanceSheetsApi } from './balanceSheetsApi';
export * from './cashFlowStatementsApi';
import { CashFlowStatementsApi } from './cashFlowStatementsApi';
export * from './companyInfoApi';
import { CompanyInfoApi } from './companyInfoApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './creditNotesApi';
import { CreditNotesApi } from './creditNotesApi';
export * from './deleteAccountApi';
import { DeleteAccountApi } from './deleteAccountApi';
export * from './generateKeyApi';
import { GenerateKeyApi } from './generateKeyApi';
export * from './incomeStatementsApi';
import { IncomeStatementsApi } from './incomeStatementsApi';
export * from './invoiceLineItemsApi';
import { InvoiceLineItemsApi } from './invoiceLineItemsApi';
export * from './invoicesApi';
import { InvoicesApi } from './invoicesApi';
export * from './issuesApi';
import { IssuesApi } from './issuesApi';
export * from './itemsApi';
import { ItemsApi } from './itemsApi';
export * from './journalEntriesApi';
import { JournalEntriesApi } from './journalEntriesApi';
export * from './journalLinesApi';
import { JournalLinesApi } from './journalLinesApi';
export * from './linkTokenApi';
import { LinkTokenApi } from './linkTokenApi';
export * from './linkedAccountsApi';
import { LinkedAccountsApi } from './linkedAccountsApi';
export * from './passthroughApi';
import { PassthroughApi } from './passthroughApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './phoneNumbersApi';
import { PhoneNumbersApi } from './phoneNumbersApi';
export * from './purchaseOrderLineItemsApi';
import { PurchaseOrderLineItemsApi } from './purchaseOrderLineItemsApi';
export * from './purchaseOrdersApi';
import { PurchaseOrdersApi } from './purchaseOrdersApi';
export * from './regenerateKeyApi';
import { RegenerateKeyApi } from './regenerateKeyApi';
export * from './reportItemsApi';
import { ReportItemsApi } from './reportItemsApi';
export * from './syncStatusApi';
import { SyncStatusApi } from './syncStatusApi';
export * from './taxRatesApi';
import { TaxRatesApi } from './taxRatesApi';
export * from './trackingCategoriesApi';
import { TrackingCategoriesApi } from './trackingCategoriesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountDetailsApi, AccountTokenApi, AccountsApi, AddressesApi, AttachmentsApi, AvailableActionsApi, BalanceSheetsApi, CashFlowStatementsApi, CompanyInfoApi, ContactsApi, CreditNotesApi, DeleteAccountApi, GenerateKeyApi, IncomeStatementsApi, InvoiceLineItemsApi, InvoicesApi, IssuesApi, ItemsApi, JournalEntriesApi, JournalLinesApi, LinkTokenApi, LinkedAccountsApi, PassthroughApi, PaymentsApi, PhoneNumbersApi, PurchaseOrderLineItemsApi, PurchaseOrdersApi, RegenerateKeyApi, ReportItemsApi, SyncStatusApi, TaxRatesApi, TrackingCategoriesApi];
