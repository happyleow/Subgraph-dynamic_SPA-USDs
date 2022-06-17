// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("locked", Value.fromBoolean(false));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save deposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save deposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("deposit", id.toString(), this);
    }
  }

  static load(id: string): deposit | null {
    return changetype<deposit | null>(store.get("deposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get liquidity(): string | null {
    let value = this.get("liquidity");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set liquidity(value: string | null) {
    if (!value) {
      this.unset("liquidity");
    } else {
      this.set("liquidity", Value.fromString(<string>value));
    }
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get locked(): boolean {
    let value = this.get("locked");
    return value!.toBoolean();
  }

  set locked(value: boolean) {
    this.set("locked", Value.fromBoolean(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class withdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("startTimeUnix", Value.fromBigInt(BigInt.zero()));
    this.set("startTime", Value.fromString(""));
    this.set("endTimeUnix", Value.fromBigInt(BigInt.zero()));
    this.set("endTime", Value.fromString(""));
    this.set("totalRewardsClaimed", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("liquidity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save withdraw entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save withdraw entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("withdraw", id.toString(), this);
    }
  }

  static load(id: string): withdraw | null {
    return changetype<withdraw | null>(store.get("withdraw", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get startTimeUnix(): BigInt {
    let value = this.get("startTimeUnix");
    return value!.toBigInt();
  }

  set startTimeUnix(value: BigInt) {
    this.set("startTimeUnix", Value.fromBigInt(value));
  }

  get startTime(): string {
    let value = this.get("startTime");
    return value!.toString();
  }

  set startTime(value: string) {
    this.set("startTime", Value.fromString(value));
  }

  get endTimeUnix(): BigInt {
    let value = this.get("endTimeUnix");
    return value!.toBigInt();
  }

  set endTimeUnix(value: BigInt) {
    this.set("endTimeUnix", Value.fromBigInt(value));
  }

  get endTime(): string {
    let value = this.get("endTime");
    return value!.toString();
  }

  set endTime(value: string) {
    this.set("endTime", Value.fromString(value));
  }

  get totalRewardsClaimed(): BigDecimal {
    let value = this.get("totalRewardsClaimed");
    return value!.toBigDecimal();
  }

  set totalRewardsClaimed(value: BigDecimal) {
    this.set("totalRewardsClaimed", Value.fromBigDecimal(value));
  }

  get liquidity(): BigDecimal {
    let value = this.get("liquidity");
    return value!.toBigDecimal();
  }

  set liquidity(value: BigDecimal) {
    this.set("liquidity", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class InititateCooldown extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("expiryDateUnix", Value.fromString(""));
    this.set("expiryDate", Value.fromBigInt(BigInt.zero()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InititateCooldown entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save InititateCooldown entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("InititateCooldown", id.toString(), this);
    }
  }

  static load(id: string): InititateCooldown | null {
    return changetype<InititateCooldown | null>(
      store.get("InititateCooldown", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get expiryDateUnix(): string {
    let value = this.get("expiryDateUnix");
    return value!.toString();
  }

  set expiryDateUnix(value: string) {
    this.set("expiryDateUnix", Value.fromString(value));
  }

  get expiryDate(): BigInt {
    let value = this.get("expiryDate");
    return value!.toBigInt();
  }

  set expiryDate(value: BigInt) {
    this.set("expiryDate", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class PeriodCoolDownUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("oldPeriod", Value.fromBigInt(BigInt.zero()));
    this.set("newPeriod", Value.fromBigInt(BigInt.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PeriodCoolDownUpdate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PeriodCoolDownUpdate entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PeriodCoolDownUpdate", id.toString(), this);
    }
  }

  static load(id: string): PeriodCoolDownUpdate | null {
    return changetype<PeriodCoolDownUpdate | null>(
      store.get("PeriodCoolDownUpdate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get oldPeriod(): BigInt {
    let value = this.get("oldPeriod");
    return value!.toBigInt();
  }

  set oldPeriod(value: BigInt) {
    this.set("oldPeriod", Value.fromBigInt(value));
  }

  get newPeriod(): BigInt {
    let value = this.get("newPeriod");
    return value!.toBigInt();
  }

  set newPeriod(value: BigInt) {
    this.set("newPeriod", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class DepositPause extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("paused", Value.fromBoolean(false));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositPause entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DepositPause entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DepositPause", id.toString(), this);
    }
  }

  static load(id: string): DepositPause | null {
    return changetype<DepositPause | null>(store.get("DepositPause", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value!.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class ClaimReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("rewardAmount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("fundId", Value.fromBigInt(BigInt.zero()));
    this.set("fundLiquidity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("liquidity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ClaimReward entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ClaimReward entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ClaimReward", id.toString(), this);
    }
  }

  static load(id: string): ClaimReward | null {
    return changetype<ClaimReward | null>(store.get("ClaimReward", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get rewardAmount(): BigDecimal {
    let value = this.get("rewardAmount");
    return value!.toBigDecimal();
  }

  set rewardAmount(value: BigDecimal) {
    this.set("rewardAmount", Value.fromBigDecimal(value));
  }

  get fundId(): BigInt {
    let value = this.get("fundId");
    return value!.toBigInt();
  }

  set fundId(value: BigInt) {
    this.set("fundId", Value.fromBigInt(value));
  }

  get fundLiquidity(): BigDecimal {
    let value = this.get("fundLiquidity");
    return value!.toBigDecimal();
  }

  set fundLiquidity(value: BigDecimal) {
    this.set("fundLiquidity", Value.fromBigDecimal(value));
  }

  get liquidity(): BigDecimal {
    let value = this.get("liquidity");
    return value!.toBigDecimal();
  }

  set liquidity(value: BigDecimal) {
    this.set("liquidity", Value.fromBigDecimal(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class unsubscribePool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("account", Value.fromBytes(Bytes.empty()));
    this.set("depositId", Value.fromBigInt(BigInt.zero()));
    this.set("totalRewardsClaimed", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("fundId", Value.fromBigInt(BigInt.zero()));
    this.set("endTimeUnix", Value.fromBigInt(BigInt.zero()));
    this.set("endTime", Value.fromString(""));
    this.set("startTimeUnix", Value.fromBigInt(BigInt.zero()));
    this.set("startTime", Value.fromString(""));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save unsubscribePool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save unsubscribePool entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("unsubscribePool", id.toString(), this);
    }
  }

  static load(id: string): unsubscribePool | null {
    return changetype<unsubscribePool | null>(store.get("unsubscribePool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get depositId(): BigInt {
    let value = this.get("depositId");
    return value!.toBigInt();
  }

  set depositId(value: BigInt) {
    this.set("depositId", Value.fromBigInt(value));
  }

  get totalRewardsClaimed(): BigDecimal {
    let value = this.get("totalRewardsClaimed");
    return value!.toBigDecimal();
  }

  set totalRewardsClaimed(value: BigDecimal) {
    this.set("totalRewardsClaimed", Value.fromBigDecimal(value));
  }

  get fundId(): BigInt {
    let value = this.get("fundId");
    return value!.toBigInt();
  }

  set fundId(value: BigInt) {
    this.set("fundId", Value.fromBigInt(value));
  }

  get endTimeUnix(): BigInt {
    let value = this.get("endTimeUnix");
    return value!.toBigInt();
  }

  set endTimeUnix(value: BigInt) {
    this.set("endTimeUnix", Value.fromBigInt(value));
  }

  get endTime(): string {
    let value = this.get("endTime");
    return value!.toString();
  }

  set endTime(value: string) {
    this.set("endTime", Value.fromString(value));
  }

  get startTimeUnix(): BigInt {
    let value = this.get("startTimeUnix");
    return value!.toBigInt();
  }

  set startTimeUnix(value: BigInt) {
    this.set("startTimeUnix", Value.fromBigInt(value));
  }

  get startTime(): string {
    let value = this.get("startTime");
    return value!.toString();
  }

  set startTime(value: string) {
    this.set("startTime", Value.fromString(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class RewardRateUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fundId", Value.fromBigInt(BigInt.zero()));
    this.set("oldRewardRate", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("newRewardRate", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
    this.set("gasUsed", Value.fromBigInt(BigInt.zero()));
    this.set("timeStamp", Value.fromString(""));
    this.set("timeStampUnix", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("transactionHash", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RewardRateUpdate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save RewardRateUpdate entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("RewardRateUpdate", id.toString(), this);
    }
  }

  static load(id: string): RewardRateUpdate | null {
    return changetype<RewardRateUpdate | null>(
      store.get("RewardRateUpdate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundId(): BigInt {
    let value = this.get("fundId");
    return value!.toBigInt();
  }

  set fundId(value: BigInt) {
    this.set("fundId", Value.fromBigInt(value));
  }

  get oldRewardRate(): BigDecimal {
    let value = this.get("oldRewardRate");
    return value!.toBigDecimal();
  }

  set oldRewardRate(value: BigDecimal) {
    this.set("oldRewardRate", Value.fromBigDecimal(value));
  }

  get newRewardRate(): BigDecimal {
    let value = this.get("newRewardRate");
    return value!.toBigDecimal();
  }

  set newRewardRate(value: BigDecimal) {
    this.set("newRewardRate", Value.fromBigDecimal(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value!.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get timeStamp(): string {
    let value = this.get("timeStamp");
    return value!.toString();
  }

  set timeStamp(value: string) {
    this.set("timeStamp", Value.fromString(value));
  }

  get timeStampUnix(): BigInt {
    let value = this.get("timeStampUnix");
    return value!.toBigInt();
  }

  set timeStampUnix(value: BigInt) {
    this.set("timeStampUnix", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class uniswapV3TokenLiquidity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("SPA", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("USDs", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("liquidity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("tokenId", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save uniswapV3TokenLiquidity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save uniswapV3TokenLiquidity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("uniswapV3TokenLiquidity", id.toString(), this);
    }
  }

  static load(id: string): uniswapV3TokenLiquidity | null {
    return changetype<uniswapV3TokenLiquidity | null>(
      store.get("uniswapV3TokenLiquidity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get SPA(): BigDecimal {
    let value = this.get("SPA");
    return value!.toBigDecimal();
  }

  set SPA(value: BigDecimal) {
    this.set("SPA", Value.fromBigDecimal(value));
  }

  get USDs(): BigDecimal {
    let value = this.get("USDs");
    return value!.toBigDecimal();
  }

  set USDs(value: BigDecimal) {
    this.set("USDs", Value.fromBigDecimal(value));
  }

  get liquidity(): BigDecimal {
    let value = this.get("liquidity");
    return value!.toBigDecimal();
  }

  set liquidity(value: BigDecimal) {
    this.set("liquidity", Value.fromBigDecimal(value));
  }

  get tokenId(): string {
    let value = this.get("tokenId");
    return value!.toString();
  }

  set tokenId(value: string) {
    this.set("tokenId", Value.fromString(value));
  }
}