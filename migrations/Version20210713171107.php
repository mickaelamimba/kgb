<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713171107 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE targets DROP FOREIGN KEY FK_AF431E1317C042CF');
        $this->addSql('DROP INDEX IDX_AF431E1317C042CF ON targets');
        $this->addSql('ALTER TABLE targets DROP missions_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE targets ADD missions_id INT NOT NULL');
        $this->addSql('ALTER TABLE targets ADD CONSTRAINT FK_AF431E1317C042CF FOREIGN KEY (missions_id) REFERENCES missions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_AF431E1317C042CF ON targets (missions_id)');
    }
}
