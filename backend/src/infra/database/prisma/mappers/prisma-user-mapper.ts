import { users as PrismaUser, Prisma } from '@prisma/client';
import { UniqueEntityID } from '@backend/core/entities/unique-entity-id';
import { User } from '@backend/domain/user/entities/user-entity';

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return User.create(
      {
        userId: raw.user_id,
        name: raw.name,
        email: raw.email,
        countryCode: raw.country_code,
        examId: raw.exam_id,
        examYear: raw.exam_year,
        userRole: raw.user_role,
        parentUser: raw.parent_user,
        parentEmail: raw.parent_email,
        secretKey: raw.secretKey,
        contact: raw.contact,
        school: raw.school,
        hardestSubject: raw.hardest_subject,
        subjectId: raw.subject_id,
        password: raw.password,
        googleId: raw.google_id,
        facebookId: raw.facebook_id,
        appleId: raw.apple_id,
        referralCode: raw.referral_code,
        salt: raw.salt,
        status: raw.status,
        newPasswordKey: raw.new_password_key,
        verifyKey: raw.verify_key,
        lastLogin: raw.last_login,
        loginStatus: raw.login_status,
        sessionCount: raw.session_count,
        ipAddress: raw.ip_address,
        cartExpiry: raw.cart_expiry,
        createdBy: raw.created_by,
        createdOn: raw.created_on,
        updatedBy: raw.updated_by,
        updatedOn: raw.updated_on,
        isAppPopupDismissed: raw.is_app_popup_dismissed,
        parentsPhoneNumber: raw.parents_phone_number,
        freeScanYourAnswerUsedOn: raw.free_scan_your_answer_used_on,
        printCount: raw.print_count,
      },
      new UniqueEntityID(raw.user_id),
    );
  }

  static toPrisma(user: User): Prisma.usersUncheckedCreateInput {
    return {
      user_id: user.userId,
      name: user.name,
      email: user.email,
      country_code: user.countryCode,
      exam_id: user.examId,
      exam_year: user.examYear,
      user_role: user.userRole,
      parent_user: user.parentUser ?? 0,
      parent_email: user.parentEmail ?? '',
      secretKey: user.secretKey ?? '',
      contact: user.contact ?? '',
      school: user.school ?? '',
      hardest_subject: user.hardestSubject,
      subject_id: user.subjectId,
      password: user.password,
      google_id: user.googleId,
      facebook_id: user.facebookId,
      apple_id: user.appleId,
      referral_code: user.referralCode,
      salt: user.salt,
      status: user.status,
      new_password_key: user.newPasswordKey,
      verify_key: user.verifyKey,
      last_login: user.lastLogin,
      login_status: user.loginStatus,
      session_count: user.sessionCount,
      ip_address: user.ipAddress,
      cart_expiry: user.cartExpiry,
      created_by: user.createdBy,
      created_on: user.createdOn,
      updated_by: user.updatedBy,
      updated_on: user.updatedOn,
      is_app_popup_dismissed: user.isAppPopupDismissed,
      parents_phone_number: user.parentsPhoneNumber,
      free_scan_your_answer_used_on: user.freeScanYourAnswerUsedOn,
      print_count: user.printCount,
    };
  }
}